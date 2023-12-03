import { CronJob } from 'cron';
import { connectToDatabase } from './database';
import { transporter } from './emailConfig'; 
import { addMinutes, format } from 'date-fns';


console.log('Application starting...');

const sendReminderEmail = async () => {
  try {
    const database = await connectToDatabase();
    const usersCollection = database.collection('users');

    const usersNeedingReminders = await usersCollection.find({ needsReminder: true }).toArray();

    usersNeedingReminders.forEach(async (user) => {
      const { email, name } = user;

      // TODO: later on this will come from database
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Food for thought',
        text: `Hello ${name}, life is full of options. All you need to do is keep on trying`,
      };

      await transporter.sendMail(mailOptions);
    });
  } catch (error) {
    console.error('Error sending reminder emails:', error);
  }
};

const futureDate = addMinutes(new Date(), 1);
const cronTime = format(futureDate, 'ss mm HH dd MM EEE');
console.log('Cron Time:', cronTime);


const job = new CronJob(cronTime, sendReminderEmail, null, true, 'Europe/Amsterdam');
job.start();
