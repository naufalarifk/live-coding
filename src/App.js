import './App.css';
import bg from './assets/bg.svg';
import digicoin from './assets/digicoin.svg';
import vector from './assets/Vector.svg';
import button from './assets/Button.svg';

function App() {

  
  return (
    <section className='flex flex-row space-x-16' >
      <div className='relative'>
        <img className='absolute' src={digicoin} alt='bg-left' />
        <img src={bg} alt='bg-left' />
      </div>
      <div className='text-white my-auto'>
        <h1 className='text-3xl font-semibold'>Sign Up</h1>
        <p className='text-[#777E90] my-4'>Use Your openID To Sign Up</p>
        <div className='flex flex-row my-4 space-x-3'>
          <p className='text-[#02C3BD]'>Email</p>
          <div className='h-full w-[2px] bg-gray-600 text-gray-600'>|</div>
          <p className='text-[#B5B3BC]'>Phone Number</p>
        </div>
        <form className='flex flex-col space-y-3 w-1/2'>
          <label htmlFor='email'>Email</label>
          <input className='rounded-md bg-transparent border border-gray-600 px-4 py-2' type='text' placeholder='Enter Your Email' />
          <label htmlFor='password'>Password</label>
          <input className='rounded-md bg-transparent border border-gray-600 px-4 py-2' type='password' placeholder='Enter Your Password' />
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input className='rounded-md bg-transparent border border-gray-600 px-4 py-2' type='password' placeholder='Confirm Your Password' />
        </form>
        <div className='flex flex-row'>
          <p className='text-[#B5B3BC]'>Referral ID (optional)</p>
        </div>
        <div className='flex flex-row items-start space-x-3 mt-4 w-1/2'>
          <img src={vector} alt='' />
          <p>By signing up I agree that I’m 18 years of age or older, to the User Agreements, Privacy Policy, Cookie Policy, E-Sign Consent.</p>
        </div>
        <button className='mt-8'>
          <img src={button} alt='' />
        </button>
      </div>
    </section>
  );
}

export default App;
