import DotGrid from '@/utils/WaterDropGrid';
import { motion } from 'framer-motion';
import { FieldError, FieldValues, useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log('Form data:', data);
    };

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  p-6">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={formVariants}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            >
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Us</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-white">Name</label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: 'Name is required' })}
                            className="mt-1 p-2 w-full rounded-md border border-white border-opacity-30 bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.name && <span className="text-red-500 text-sm">{(errors.name as FieldError).message}</span>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-white">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                            className="mt-1 p-2 w-full rounded-md border border-white border-opacity-30 bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                       {errors.name && <span className="text-red-500 text-sm">{(errors.name as FieldError).message}</span>}
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-white">Message</label>
                        <textarea
                            id="message"
                            {...register('message', { required: 'Message is required' })}
                            className="mt-1 p-2 w-full rounded-md border border-white border-opacity-30 bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            rows={4}
                        ></textarea>
                        {errors.name && <span className="text-red-500 text-sm">{(errors.name as FieldError).message}</span>}
                    </div>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-2 px-4 rounded-md bg-purple-600 text-white font-bold focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
            <div className='hidden md:block'>
            <DotGrid/>
            </div>
        </div>
    );
};

export default ContactForm;
