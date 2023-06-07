
const SectionTitle = ({ heading }) => {
    return (
        <div className="text-4xl font-bold text-center my-24 ">
            <p className='text-pink-500'>------------------------</p>
            <h3>{heading}</h3>
            <p className='text-pink-500'>------------------------</p>
        </div>
    );
};

export default SectionTitle;