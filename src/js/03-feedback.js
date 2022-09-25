'use strict';
import throttle from 'lodash.throttle';

import { save, load, remove } from '../js/storage';

const formRef = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-key';

initPage();

const onFormInput = event => {
  const { name, value } = event.target;
  let saveData = load(LOCAL_STORAGE_KEY);
  saveData = saveData ? saveData : {};
  saveData[name] = value;
  save(LOCAL_STORAGE_KEY, saveData);
};

const throttledOnFormInput = throttle(onFormInput, 500);
formRef.addEventListener('input', throttledOnFormInput);

function initPage() {
  const saveData = load(LOCAL_STORAGE_KEY);
  if (!saveData) {
    return;
  }
  Object.entries(saveData).forEach(([name, value]) => {
    formRef.elements[name].value = value;
  });
}

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  remove(LOCAL_STORAGE_KEY);
};

formRef.addEventListener('submit', handleSubmit);
