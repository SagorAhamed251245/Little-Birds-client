
const Button = ({title}) => {
    return (
        <button type="submit" className="w-full text-white bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-500 dark:focus:ring-pink-800">{title}</button>
    );
};

export default Button;