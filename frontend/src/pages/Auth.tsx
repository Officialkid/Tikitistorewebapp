import { useForm } from 'react-hook-form';
import { login } from '../services/api';

interface FormData { email: string; password: string; }

export default function Login() {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            await login(data);
            // Redirect to home
        } catch (e) { console.error(e); }
    };

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input {...register('email')} placeholder="Email" className="border p-2 w-full rounded" />
                <input {...register('password')} type="password" placeholder="Password" className="border p-2 w-full rounded" />
                <button type="submit" className="bg-primary-blue-mid text-bg-white py-2 px-4 rounded">Login</button>
            </form>
            <a href="/register">Register instead</a>
        </div>
    );
}