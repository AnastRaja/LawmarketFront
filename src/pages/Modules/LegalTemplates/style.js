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
}
 .light .input-styles {
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #9999;
    }
    &:hover fieldset {
      border-color: #000;
    }
    &.Mui-focused fieldset {
      border-color: #2C01AA;
    }
    color: #000;
  }
  & .MuiInputBase-input {
    color: #000;
  }
  & .MuiInputBase-input::placeholder {
    color: #9999;
    opacity: 1;
  }
}
  .circleButton {
     min-width: 35px !important;
    width: 35px;
    height: 35px;
    border-radius: 50% !important;
    border: 1px solid #8462FF !important;
    padding: 0 !important;
    background: transparent;
    color: #fff !important;

  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(132, 98, 255, 0.1);
    border: 1px solid #8462FF;
  }
}
  .light .circleButton {
    border: 1px solid #999 !important;
    color: #000 !important;
  }

.circleButtonWithGradient {
  min-width: 35px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(180deg,#fff,#999);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
  
  .upload_border{
   border: 2px dashed #ffffff3b;
              borderRadius: 10px;

              display: flex;
               align-items: center;
  justify-content: center;
  flex-direction: column;
              gap: 10px;
              height: 100%;
              cursor: pointer;
              transition: border-color 0.3s ease;
              "&:hover": {
                borderColor: #fff,
              }
                
  }
              .light .upload_border{
   border: 2px dashed #a7a2a2;
             
              "&:hover": {
                borderColor: #000,
              }
                
  }
              .cancelbutton {
  background: transparent;
  border: 1px solid #8462FF;
  width: fit-content;
  color: #fff;
  border-radius: 6px;
  height: 48px;
  padding: 0 30px;
  text-transform: none;
  transition: border-color 0.3s ease; /* Optional for hover effect */
  
  &:hover {
    /* Uncomment and modify below line for hover effect */
    /* background: linear-gradient(45deg, #FE8B8B 30%, #FF9E53 90%); */
  }
}
  .light .cancelbutton {
  color: #000;
     
    background: transparent;
   
    border: 1px solid #5146e5;
  &:hover {
   color: #000;
   background: transparent;
   
    border: 2px solid #5146e5;
  }}
  .gradientButton {
  background: linear-gradient(180deg, #fff, #999);
  border: 0;
  width: fit-content;
  color: black;
  border-radius: 3px;
  height: 48px;
  padding: 0 30px;
  text-transform: none !important;
  color: #000 !important;
  transition: border-color 0.3s ease; /* Optional for hover effect */

  &:hover {
    /* Uncomment and modify below line for hover effect */
    /* background: linear-gradient(45deg, #FE8B8B 30%, #FF9E53 90%); */
  }
}
  .light .gradientButton {
  background: linear-gradient(
    180deg,
    rgba(81, 70, 229, 1) 50%,
    rgba(123, 58, 237, 1) 100%
  );
  border: 0;
  width: fit-content;
  color: black;
  border-radius: 3px;
  height: 48px;
  padding: 0 30px;
  text-transform: none !important;
  color: #fff !important;
  transition: border-color 0.3s ease; /* Optional for hover effect */

  &:hover {
    /* Uncomment and modify below line for hover effect */
    /* background: linear-gradient(45deg, #FE8B8B 30%, #FF9E53 90%); */
  }
}
  .formControl {
  width: 100%; /* Full width */
  
  & .MuiOutlinedInput-root {
    height: 50px;

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

  & .MuiSelect-icon {
    color: #fff;
  }
}
  .light .formControl {
  width: 100%; /* Full width */
  
  & .MuiOutlinedInput-root {
    height: 50px;

    & fieldset {
      border-color: #9999;
    }
    
    &:hover fieldset {
      border-color: #000;
    }
    
    &.Mui-focused fieldset {
      border-color: #9999;
    }
    
    color: #000;
  }

  & .MuiSelect-icon {
    color: #000;
  }
}
  .circleButtonWithGradientTable {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(180deg, #8462FF 0%, #E23CFF 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: linear-gradient(180deg, #8462FF 20%, #E23CFF 120%);
  }
}
  .deleteButton {
  background: linear-gradient(180deg, #FF5757 0%, #FF0000 100%);
  
  &:hover {
    background: linear-gradient(180deg, #FF5757 20%, #FF0000 120%);
  }
}
  .tablePagination {
  color: #fff;

  & .MuiTablePagination-selectIcon {
    color: #fff;
  }

  & .MuiTablePagination-actions {
    color: #fff;
  }
}
 .light .tablePagination {
  color: #000;

  & .MuiTablePagination-selectIcon {
    color: #000;
  }

  & .MuiTablePagination-actions {
    color: #000;
  }
}
  .boldWhiteText {
  color: #fff;
  font-weight: bold;
}
  .tableHead {
  background-color: #1a1a1a;

  & th {
    border-bottom: 2px solid #ffffff3b;
    border-right: -0px solid #ffffff3b;
color: #fff;
    &:last-child {
      border-right: none;
    }
  }
}
  .light .tableHead {
  background-color: #f0efed;

  & th {
    border-bottom: 2px solid #f0efed;
    border-right: -0px solid #f0efed;
        color: #000;
    &:last-child {
      border-right: none;
    }
  }
}
  .tableRow {
  &:last-child td,
  &:last-child th {
    border: 0;
  }

  & td {
    border-color: #ffffff3b;
  }
}
  .light .tableRow {
  &:last-child td,
  &:last-child th {
    border: 0;
  }

  & td {
    border-color: #ffffff3b;
    color: #000;
  }
}
  .tableCellText {
  color: #fff;
}`;


// Create a style element and append it to the head
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);