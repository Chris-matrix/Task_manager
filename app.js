import express  from 'express';
import taskRoutes from './routes/tasks.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use("veiws engine", 'ejs');

app.use("veiws ","/veiws");

app.use('/task', taskRoutes);



const port = process.env.PORT ||3000;

app.listen(port, () => {
    console.log(`Server is running on port https://localhost: ${port}`);
});