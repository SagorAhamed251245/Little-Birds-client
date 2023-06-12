import ReactLoading from 'react-loading';
const LoadingPage = () => {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
          <ReactLoading type={'spin'} color={'#ff58f0'} height={'5%'} width={'5%'} />
      </div>
    );
};

export default LoadingPage;