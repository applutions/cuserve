// const  rootPath = 'http://localhost:3000/';
// const rrootPath = 'http://pictuscode.eu-4.evennode.com/';
const rootPath = 'http://pictuscode.eu-4.evennode.com/';

const apiPath = rootPath + 'api/';
const cuserveapiPath = 'http://cuserve.herokuapp.com';


export const constants = {
  register: apiPath + 'register/',
  login: apiPath + 'login/',
  getusers: apiPath + 'users/',
  getsettings: apiPath + 'sitesettings/',
  getbanner: apiPath + 'banner/',
  getcustomer: apiPath + 'customer/',
  getcustomeraccount: apiPath + 'customeraccount/',
  bills: apiPath + 'bills/',
  getnewbills: apiPath + 'getnewbills/',
  getivr: apiPath + 'ivr/',
  getpaypal: apiPath + 'paypaypal/',
  paymentsucess: apiPath + 'paymentsucess/',
  getcalllog: apiPath + 'calllog/',
  verifyuser: apiPath + 'verifyuser/',
  roles: apiPath + 'roles/',

  addcompany : cuserveapiPath + '/company/new',
  addIvr: cuserveapiPath + '/ivr/new',
  uploadcompanylogo: apiPath + 'upload/companylogo/',
  uploadcsv: apiPath + 'upload/csv/', 

  deletefile: apiPath + 'deletefile/', 
  companyImagepath: rootPath + 'assets/images/companylogo/',
  android_get_company:cuserveapiPath+'/company/all?limit=100000',
  android_get_ivr:cuserveapiPath+'/ivr/find',

 

  upload: apiPath + 'assets/',
  // deletefile: apiPath + 'deletefile/',
  Imagepath: 'assets/images/',
  UploadedImage: rootPath + 'assets/images/',


  // Userend
  userRegister: apiPath + 'userregister/',
  userLogin: apiPath + 'userlogin/',
  listCategories: apiPath + 'listcategories/',

  // Delivery Address
  getAddress: apiPath + 'address/',
  getDefaultAddress: apiPath + 'defaultaddress/',

  // Stripe payment
  makePayment: apiPath + 'makePayment/'

};


