// Constructor
function ResponseMessage() {
  // always initialize all instance properties
  this.code = null;
  this.body = null;
  this.status = null;
  this.error = null;
}

// class methods
ResponseMessage.prototype.code = function() {
	return this.code;
};


ResponseMessage.prototype.status = function() {
	return this.status;
};

ResponseMessage.prototype.body = function() {
	return this.body;
};

ResponseMessage.prototype.errro = function() {
	return this.error;
};


// export the class
module.exports = ResponseMessage;