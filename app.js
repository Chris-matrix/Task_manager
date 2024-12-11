import express  from 'express';
import taskRoutes from './routes/tasks.js';

const app = express();

app.use(express.json());

app.use("veiws engine", 'ejs');

app.use("veiws ","/veiws");

app.use('/task', taskRoutes);

app.use(express.static('public'));


const port = process.env.PORT ||3000;

app.listen(port, () => {
    console.log(`Server is running on port https://localhost: ${port}`);
});