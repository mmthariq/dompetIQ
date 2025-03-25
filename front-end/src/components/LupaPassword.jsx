import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const LupaPassword = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle OTP input change
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus to next input
    if (value !== '' && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle OTP submission
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  // Handle OTP verification
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  // Handle password reset
  const handleResetPassword = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(4);
    }, 1500);
  };

  // Handle new password input change
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  // Handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow">
        {/* Header */}
        <div className="p-4 border-b flex items-center">
          <button className="text-gray-500 mr-2">
            <ArrowBackIcon />
          </button>
          <h1 className="text-lg font-medium">Lupa Password</h1>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <form onSubmit={handleSubmitEmail}>
              <div className="mb-8 text-center">
                <div className="flex justify-center mb-4">
                  <MailOutlineIcon sx={{ fontSize: 48 }} className="text-green-500" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Reset Password</h2>
                <p className="text-gray-600">
                  Masukkan alamat email yang terdaftar untuk menerima kode verifikasi
                </p>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Masukkan email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-medium text-white ${
                  loading ? 'bg-green-400' : 'bg-green-500 hover:bg-green-600'
                }`}
                disabled={loading}
              >
                {loading ? 'Mengirim...' : 'Kirim Kode Verifikasi'}
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleVerifyOtp}>
              <div className="mb-8 text-center">
                <h2 className="text-xl font-semibold mb-2">Verifikasi Kode OTP</h2>
                <p className="text-gray-600">
                  Masukkan kode verifikasi yang telah dikirim ke email {email}
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      className="w-16 h-16 text-center text-xl font-bold border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target.value, index)}
                    />
                  ))}
                </div>
                <p className="text-sm text-center text-gray-500">
                  Tidak menerima kode? <button type="button" className="text-green-500 font-medium">Kirim Ulang</button>
                </p>
              </div>
              
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-medium text-white ${
                  loading ? 'bg-green-400' : 'bg-green-500 hover:bg-green-600'
                }`}
                disabled={loading || otp.some(digit => digit === '')}
              >
                {loading ? 'Memverifikasi...' : 'Verifikasi'}
              </button>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleResetPassword}>
              <div className="mb-8 text-center">
                <div className="flex justify-center mb-4">
                  <LockIcon sx={{ fontSize: 48 }} className="text-green-500" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Buat Password Baru</h2>
                <p className="text-gray-600">
                  Password baru Anda harus berbeda dari password yang sebelumnya digunakan
                </p>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Password Baru
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Masukkan password baru"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Konfirmasi Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Masukkan ulang password baru"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
                {confirmPassword && newPassword !== confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">Password tidak sama</p>
                )}
              </div>
              
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-medium text-white ${
                  loading || (newPassword !== confirmPassword) ? 'bg-green-400' : 'bg-green-500 hover:bg-green-600'
                }`}
                disabled={loading || !newPassword || (newPassword !== confirmPassword)}
              >
                {loading ? 'Memproses...' : 'Simpan Password Baru'}
              </button>
            </form>
          )}

          {step === 4 && (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <CheckCircleOutlineIcon sx={{ fontSize: 64 }} className="text-green-500" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Password Berhasil Diubah</h2>
              <p className="text-gray-600 mb-8">
                Password Anda telah berhasil diubah. Silakan login dengan password baru Anda.
              </p>
              <button
                type="button"
                className="w-full py-3 rounded-lg font-medium text-white bg-green-500 hover:bg-green-600"
                onClick={() => window.location.href = '/login'}
              >
                Kembali ke Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LupaPassword;