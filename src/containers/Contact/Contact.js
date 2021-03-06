import React from 'react';
import Heading from '../../components/UIElements/Heading/Heading';
import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import useContactState from '../../hooks/useContactState';
import SvgIcon from '../../components/UIElements/SvgIcon/SvgIcon';

const Contact = () => {
  const {
    emailValue,
    nameValue,
    titleValue,
    messageValue,
    changeEmailInputHandler,
    changeNameInputHandler,
    changeTitleInputHandler,
    changeMessageInputHandler,
    formSubmitionHandler,
    showSentMessageIcon,
  } = useContactState();

  return (
    <section className="contact">
      <div className="u-center u-margin-bottom-small contact__heading-box">
        <Heading type="secondary">
          Contact<span className="color">.</span>
        </Heading>
      </div>

      <form className="contact__form" onSubmit={formSubmitionHandler}>
        {showSentMessageIcon && (
          <SvgIcon iconName="checkmark-outline" className="contact__message-sent-icon" />
        )}
        <div className="contact__info">
          <ul className="contact__info__list">
            <li className="contact__info__item">Sebastian Dębicki</li>
            <li className="contact__info__item">sebastian.debicki5@gmail.com</li>
          </ul>
        </div>

        <Input
          value={emailValue}
          onChange={changeEmailInputHandler}
          type="input"
          inputType="email"
          name="Email"
          required
        />
        <Input
          value={nameValue}
          onChange={changeNameInputHandler}
          type="input"
          inputType="text"
          name="Name"
        />
        <Input
          value={titleValue}
          onChange={changeTitleInputHandler}
          type="input"
          inputType="text"
          name="Title"
          required
          minLength={3}
        />
        <Input
          value={messageValue}
          onChange={changeMessageInputHandler}
          type="textarea"
          name="Message"
          required
          minLength={6}
        />
        <Button type="primary">Send</Button>
      </form>

      <div className="contact__color-box"></div>
    </section>
  );
};

export default Contact;
