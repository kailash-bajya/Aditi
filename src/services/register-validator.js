class Validator {
    validateInputs(inputData) {
      let errorMsg = "";
      if(!inputData.contact_no) {
        errorMsg +="Please Enter contact No.\n"
      }
      if(!inputData.email) {
        errorMsg +="Please Enter Email Address.\n"
      }
      if(!inputData.password) {
        errorMsg +="Please Enter Password.\n"
      }
      if(!inputData.re_password) {

        errorMsg +="Please cofirm Password.\n"
      }
      if(inputData.password && inputData.password!=inputData.re_password){

        errorMsg +="Confirm password not matched.\n"
      }
      if(inputData.year && inputData.year.toString().match(/[^0-9]/g)) {
        errorMsg ="Year must be a number.\n"
      }
      if(inputData.country && inputData.country.length > 0 && !inputData.country.match(/^[a-z|A-Z][a-z|A-Z]$/)) {
        errorMsg ="Country code must be two letters.\n"
      }

      if(errorMsg.length == 0){
        return true;
      } else {
        alert(errorMsg);
        return false;
      }
    }
  }
  export default Validator;