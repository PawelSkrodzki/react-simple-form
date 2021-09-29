export default function validation(values) {
  let errors = {};
  if (!values.name.trim()) {
    errors.name = 'Name required';
  } else if(values.name.trim() <= 2){
    errors.name = 'Name must contains more than 2 signs';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.text) {
    errors.text = 'Text is required';
  } else if (values.text.length >= 5000) {
    errors.text = 'Text has to be lower than 5000 characters';
  }

 return errors;
}

