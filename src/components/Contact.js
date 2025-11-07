import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS 설정
  // 1. https://www.emailjs.com 에서 무료 계정 생성
  // 2. Email Service 생성 (Gmail 등)
  // 3. Email Template 생성
  // 4. 아래 값들을 환경변수나 여기에 직접 입력
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // EmailJS 설정이 안 되어 있으면 mailto 링크로 대체
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      // mailto 링크로 대체
      const subject = encodeURIComponent(`포트폴리오 사이트 문의: ${formData.name}`);
      const body = encodeURIComponent(`이름: ${formData.name}\n이메일: ${formData.email}\n\n메시지:\n${formData.message}`);
      window.location.href = `mailto:seojh7816@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 3000);
      return;
    }

    try {
      // EmailJS 초기화
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // 이메일 전송
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'seojh7816@gmail.com'
        }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('메일 전송에 실패했습니다. 직접 이메일로 연락주시거나 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">CONTACT</h2>
        <p className="contact-intro">
          질문이 있으시거나 함께 일하고 싶으시다면 연락주세요.
        </p>
        
        <div className="contact-links">
          <a href="mailto:seojh7816@gmail.com" className="contact-link">
            <span className="contact-icon">✉</span>
            <span>seojh7816@gmail.com</span>
          </a>
          <a href="tel:010-7576-7816" className="contact-link">
            <span className="contact-icon">📞</span>
            <span>010-7576-7816</span>
          </a>
          <a href="https://blog.naver.com/seojh7816" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">🌐</span>
            <span>블로그</span>
          </a>
          <a href="https://github.com/janghos" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">💻</span>
            <span>GitHub</span>
          </a>
          <a href="https://doi.org/10.8080/2020240000693" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">📄</span>
            <span>등록 특허</span>
          </a>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="메시지"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? '전송 중...' : submitted ? '전송 완료!' : '전송'}
          </button>
        </form>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {submitted && !error && (
          <div className="success-message">
            메시지가 성공적으로 전송되었습니다. 감사합니다!
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

