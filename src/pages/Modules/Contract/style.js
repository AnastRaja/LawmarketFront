const styles = `
.input-styles {
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #ffffff3b;
    }
    &:hover fieldset {
      border-color: #fff;
    }
    &.Mui-focused fieldset {
      border-color: #2C01AA;
    }
    color: #fff;
  }
  & .MuiInputBase-input {
    color: #fff;
  }
  & .MuiInputBase-input::placeholder {
    color: #ffffff80;
    opacity: 1;
  }
}`;


// Create a style element and append it to the head
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);