import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 실제 폼 제출 로직을 추가할 수 있습니다
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section className="contact">
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
          <button type="submit" className="submit-btn">
            {submitted ? '전송 완료!' : '전송'}
          </button>
        </form>
        
        {submitted && (
          <div className="success-message">
            메시지가 성공적으로 전송되었습니다. 감사합니다!
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

