var path = require('path');
var fs = require('fs');
var apiClient = require('./api-client');

function StorageApi(config) {
	var self = this;
	
	apiClient = new apiClient(config);
	this.config = apiClient.config;
}

    
    
/**
* GetDiscUsage
* Check the disk usage of the current account. Parameters: storage - user&#39;s storage name.
*
* @param  (String) storage  -  (optional) 
* @returns DiscUsageResponse (Map)
*/
StorageApi.prototype.GetDiscUsage =  function(storage,  callback ){
	var self = this	;
	
	 storage = typeof  storage !== 'undefined' ? storage : ''; 
	
  		
	var resourcePath = '/storage/disc/?appSid={appSid}&amp;storage={storage}';
    
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	if(storage !== 'undefined' && storage !== null && storage !== ''){
		resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
    
	method = 'GET'
	queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;	
	
		
    headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'
	
	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
 }
	
    
/**
* GetIsExist
* Check if a specific file or folder exists. Parameters: path - file or folder path e.g. /file.ext or /Folder1, versionID - file&#39;s version, storage - user&#39;s storage name.
*
* @param  (String) Path  -  (required) 
* @param  (String) versionId  -  (optional) 
* @param  (String) storage  -  (optional) 
* @returns FileExistResponse (Map)
*/
StorageApi.prototype.GetIsExist =  function(Path, versionId, storage,  callback ){
	var self = this	;
	
	 Path = typeof  Path !== 'undefined' ? Path : ''; 
	 versionId = typeof  versionId !== 'undefined' ? versionId : ''; 
	 storage = typeof  storage !== 'undefined' ? storage : ''; 
	
    if(Path === ''){
		throw new Error('missing required parameters.');
    }     		
	var resourcePath = '/storage/exist/{path}/?appSid={appSid}&amp;versionId={versionId}&amp;storage={storage}';
    
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	if(Path !== 'undefined' && Path !== null && Path !== ''){
		resourcePath = resourcePath.replace("{" + "Path" + "}" , Path);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]Path.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(versionId !== 'undefined' && versionId !== null && versionId !== ''){
		resourcePath = resourcePath.replace("{" + "versionId" + "}" , versionId);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]versionId.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(storage !== 'undefined' && storage !== null && storage !== ''){
		resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
    
	method = 'GET'
	queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;	
	
		
    headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'
	
	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
 }
	
    
/**
* PutCopy
* Copy a specific file. Parameters: path - source file path e.g. /file.ext, versionID - source file&#39;s version, storage - user&#39;s source storage name, newdest - destination file path, destStorage - user&#39;s destination storage name.
*
* @param  (String) Path  -  (required) 
* @param  (String) newdest  -  (required) 
* @param  (String) versionId  -  (optional) 
* @param  (String) storage  -  (optional) 
* @param  (String) destStorage  -  (optional) 
* @param  (File) file  -  (required) 
* @returns ResponseMessage (Map)
*/
StorageApi.prototype.PutCopy =  function(Path, newdest, versionId, storage, destStorage, file,  callback ){
	var self = this	;
	
	 Path = typeof  Path !== 'undefined' ? Path : ''; 
	 newdest = typeof  newdest !== 'undefined' ? newdest : ''; 
	 versionId = typeof  versionId !== 'undefined' ? versionId : ''; 
	 storage = typeof  storage !== 'undefined' ? storage : ''; 
	 destStorage = typeof  destStorage !== 'undefined' ? destStorage : ''; 
	
    if(Path === ''){
		throw new Error('missing required parameters.');
    }     if(newdest === ''){
		throw new Error('missing required parameters.');
    }       		
	var resourcePath = '/storage/file/{path}/?appSid={appSid}&amp;newdest={newdest}&amp;versionId={versionId}&amp;storage={storage}&amp;destStorage={destStorage}';
    
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	if(Path !== 'undefined' && Path !== null && Path !== ''){
		resourcePath = resourcePath.replace("{" + "Path" + "}" , Path);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]Path.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(newdest !== 'undefined' && newdest !== null && newdest !== ''){
		resourcePath = resourcePath.replace("{" + "newdest" + "}" , newdest);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]newdest.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(versionId !== 'undefined' && versionId !== null && versionId !== ''){
		resourcePath = resourcePath.replace("{" + "versionId" + "}" , versionId);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]versionId.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(storage !== 'undefined' && storage !== null && storage !== ''){
		resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(destStorage !== 'undefined' && destStorage !== null && destStorage !== ''){
		resourcePath = resourcePath.replace("{" + "destStorage" + "}" , destStorage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]destStorage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
    
	method = 'PUT'
	queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;	
	
	if(file !== 'undefined' && file !== null && file !== ''){
		postData = fs.readFileSync(file)
	}
    	
    headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'multipart/form-data'
	
	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
 }
	
    
/**
* GetDownload
* Download a specific file. Parameters: path - file path e.g. /file.ext, versionID - file&#39;s version, storage - user&#39;s storage name.
*
* @param  (String) Path  -  (required) 
* @param  (String) versionId  -  (optional) 
* @param  (String) storage  -  (optional) 
* @returns ResponseMessage (Map)
*/
StorageApi.prototype.GetDownload =  function(Path, versionId, storage,  callback ){
	var self = this	;
	
	 Path = typeof  Path !== 'undefined' ? Path : ''; 
	 versionId = typeof  versionId !== 'undefined' ? versionId : ''; 
	 storage = typeof  storage !== 'undefined' ? storage : ''; 
	
    if(Path === ''){
		throw new Error('missing required parameters.');
    }     		
	var resourcePath = '/storage/file/{path}/?appSid={appSid}&amp;versionId={versionId}&amp;storage={storage}';
    
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	if(Path !== 'undefined' && Path !== null && Path !== ''){
		resourcePath = resourcePath.replace("{" + "Path" + "}" , Path);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]Path.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(versionId !== 'undefined' && versionId !== null && versionId !== ''){
		resourcePath = resourcePath.replace("{" + "versionId" + "}" , versionId);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]versionId.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(storage !== 'undefined' && storage !== null && storage !== ''){
		resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
    
	method = 'GET'
	queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;	
	
		
    headerParams['Accept'] = 'application/xml,application/octet-stream'
    headerParams['Content-Type'] = 'application/json'
	
	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
 }
	
    
/**
* PutCreate
* Upload a specific file. Parameters: path - source file path e.g. /file.ext, versionID - source file&#39;s version, storage - user&#39;s source storage name, newdest - destination file path, destStorage - user&#39;s destination storage name.
*
* @param  (String) Path  -  (required) 
* @param  (String) versionId  -  (optional) 
* @param  (String) storage  -  (optional) 
* @param  (File) file  -  (required) 
* @returns ResponseMessage (Map)
*/
StorageApi.prototype.PutCreate =  function(Path, versionId, storage, file,  callback ){
	var self = this	;
	
	 Path = typeof  Path !== 'undefined' ? Path : ''; 
	 versionId = typeof  versionId !== 'undefined' ? versionId : ''; 
	 storage = typeof  storage !== 'undefined' ? storage : ''; 
	
    if(Path === ''){
		throw new Error('missing required parameters.');
    }     		
	var resourcePath = '/storage/file/{path}/?appSid={appSid}&amp;versionId={versionId}&amp;storage={storage}';
    
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	if(Path !== 'undefined' && Path !== null && Path !== ''){
		resourcePath = resourcePath.replace("{" + "Path" + "}" , Path);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]Path.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(versionId !== 'undefined' && versionId !== null && versionId !== ''){
		resourcePath = resourcePath.replace("{" + "versionId" + "}" , versionId);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]versionId.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(storage !== 'undefined' && storage !== null && storage !== ''){
		resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
    
	method = 'PUT'
	queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;	
	
	
    postData = fs.readFileSync(file)
    	
    headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'multipart/form-data'
	
	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
 }
	
    
/**
* DeleteFile
* Remove a specific file. Parameters: path - file path e.g. /file.ext, versionID - file&#39;s version, storage - user&#39;s storage name.
*
* @param  (String) Path  -  (required) 
* @param  (String) versionId  -  (optional) 
* @param  (String) storage  -  (optional) 
* @returns RemoveFileResponse (Map)
*/
StorageApi.prototype.DeleteFile =  function(Path, versionId, storage,  callback ){
	var self = this	;
	
	 Path = typeof  Path !== 'undefined' ? Path : ''; 
	 versionId = typeof  versionId !== 'undefined' ? versionId : ''; 
	 storage = typeof  storage !== 'undefined' ? storage : ''; 
	
    if(Path === ''){
		throw new Error('missing required parameters.');
    }     		
	var resourcePath = '/storage/file/{path}/?appSid={appSid}&amp;versionId={versionId}&amp;storage={storage}';
    
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	if(Path !== 'undefined' && Path !== null && Path !== ''){
		resourcePath = resourcePath.replace("{" + "Path" + "}" , Path);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]Path.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(versionId !== 'undefined' && versionId !== null && versionId !== ''){
		resourcePath = resourcePath.replace("{" + "versionId" + "}" , versionId);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]versionId.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(storage !== 'undefined' && storage !== null && storage !== ''){
		resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
    
	method = 'DELETE'
	queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;	
	
		
    headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'
	
	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
 }
	
    
/**
* PostMoveFile
* Move a specific file.
*
* @param  (String) src  - source file path e.g. /file.ext (required) 
* @param  (String) dest  -  (required) 
* @param  (String) versionId  - source file&#39;s version, (optional) 
* @param  (String) storage  - user&#39;s source storage name (optional) 
* @param  (String) destStorage  - user&#39;s destination storage name (optional) 
* @returns MoveFileResponse (Map)
*/
StorageApi.prototype.PostMoveFile =  function(src, dest, versionId, storage, destStorage,  callback ){
	var self = this	;
	
	 src = typeof  src !== 'undefined' ? src : ''; 
	 dest = typeof  dest !== 'undefined' ? dest : ''; 
	 versionId = typeof  versionId !== 'undefined' ? versionId : ''; 
	 storage = typeof  storage !== 'undefined' ? storage : ''; 
	 destStorage = typeof  destStorage !== 'undefined' ? destStorage : ''; 
	
    if(src === ''){
		throw new Error('missing required parameters.');
    }     if(dest === ''){
		throw new Error('missing required parameters.');
    }       		
	var resourcePath = '/storage/file/{src}/?dest={dest}&amp;appSid={appSid}&amp;versionId={versionId}&amp;storage={storage}&amp;destStorage={destStorage}';
    
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	if(src !== 'undefined' && src !== null && src !== ''){
		resourcePath = resourcePath.replace("{" + "src" + "}" , src);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]src.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(dest !== 'undefined' && dest !== null && dest !== ''){
		resourcePath = resourcePath.replace("{" + "dest" + "}" , dest);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]dest.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(versionId !== 'undefined' && versionId !== null && versionId !== ''){
		resourcePath = resourcePath.replace("{" + "versionId" + "}" , versionId);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]versionId.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(storage !== 'undefined' && storage !== null && storage !== ''){
		resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(destStorage !== 'undefined' && destStorage !== null && destStorage !== ''){
		resourcePath = resourcePath.replace("{" + "destStorage" + "}" , destStorage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]destStorage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
    
	method = 'POST'
	queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;	
	
		
    headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'
	
	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
 }
	
    
/**
* PutCopyFolder
* Copy a folder. Parameters: path - source folder path e.g. /Folder1, storage - user&#39;s source storage name, newdest - destination folder path e.g. /Folder2, destStorage - user&#39;s destination storage name.
*
* @param  (String) Path  -  (required) 
* @param  (String) newdest  -  (required) 
* @param  (String) storage  -  (optional) 
* @param  (String) destStorage  -  (optional) 
* @returns ResponseMessage (Map)
*/
StorageApi.prototype.PutCopyFolder =  function(Path, newdest, storage, destStorage,  callback ){
	var self = this	;
	
	 Path = typeof  Path !== 'undefined' ? Path : ''; 
	 newdest = typeof  newdest !== 'undefined' ? newdest : ''; 
	 storage = typeof  storage !== 'undefined' ? storage : ''; 
	 destStorage = typeof  destStorage !== 'undefined' ? destStorage : ''; 
	
    if(Path === ''){
		throw new Error('missing required parameters.');
    }     if(newdest === ''){
		throw new Error('missing required parameters.');
    }     		
	var resourcePath = '/storage/folder/{path}/?appSid={appSid}&amp;newdest={newdest}&amp;storage={storage}&amp;destStorage={destStorage}';
    
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	if(Path !== 'undefined' && Path !== null && Path !== ''){
		resourcePath = resourcePath.replace("{" + "Path" + "}" , Path);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]Path.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(newdest !== 'undefined' && newdest !== null && newdest !== ''){
		resourcePath = resourcePath.replace("{" + "newdest" + "}" , newdest);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]newdest.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(storage !== 'undefined' && storage !== null && storage !== ''){
		resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(destStorage !== 'undefined' && destStorage !== null && destStorage !== ''){
		resourcePath = resourcePath.replace("{" + "destStorage" + "}" , destStorage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]destStorage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
    
	method = 'PUT'
	queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;	
	
		
    headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'
	
	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
 }
	
    
/**
* GetListFiles
* Get the file listing of a specific folder. Parametres: path - start with name of storage e.g. root folder &#39;/&#39;or some folder &#39;/folder1/..&#39;, storage - user&#39;s storage name.
*
* @param  (String) Path  -  (optional) 
* @param  (String) storage  -  (optional) 
* @returns ResponseMessage (Map)
*/
StorageApi.prototype.GetListFiles =  function(Path, storage,  callback ){
	var self = this	;
	
	 Path = typeof  Path !== 'undefined' ? Path : ''; 
	 storage = typeof  storage !== 'undefined' ? storage : ''; 
	
    		
	var resourcePath = '/storage/folder/{path}/?appSid={appSid}&amp;storage={storage}';
    
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	if(Path !== 'undefined' && Path !== null && Path !== ''){
		resourcePath = resourcePath.replace("{" + "Path" + "}" , Path);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]Path.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(storage !== 'undefined' && storage !== null && storage !== ''){
		resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
    
	method = 'GET'
	queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;	
	
		
    headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'
	
	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
 }
	
    
/**
* PutCreateFolder
* Create the folder. Parameters: path - source folder path e.g. /Folder1, storage - user&#39;s source storage name, newdest - destination folder path e.g. /Folder2, destStorage - user&#39;s destination storage name.
*
* @param  (String) Path  -  (required) 
* @param  (String) storage  -  (optional) 
* @param  (String) destStorage  -  (optional) 
* @returns ResponseMessage (Map)
*/
StorageApi.prototype.PutCreateFolder =  function(Path, storage, destStorage,  callback ){
	var self = this	;
	
	 Path = typeof  Path !== 'undefined' ? Path : ''; 
	 storage = typeof  storage !== 'undefined' ? storage : ''; 
	 destStorage = typeof  destStorage !== 'undefined' ? destStorage : ''; 
	
    if(Path === ''){
		throw new Error('missing required parameters.');
    }     		
	var resourcePath = '/storage/folder/{path}/?appSid={appSid}&amp;storage={storage}&amp;destStorage={destStorage}';
    
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	if(Path !== 'undefined' && Path !== null && Path !== ''){
		resourcePath = resourcePath.replace("{" + "Path" + "}" , Path);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]Path.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(storage !== 'undefined' && storage !== null && storage !== ''){
		resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(destStorage !== 'undefined' && destStorage !== null && destStorage !== ''){
		resourcePath = resourcePath.replace("{" + "destStorage" + "}" , destStorage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]destStorage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
    
	method = 'PUT'
	queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;	
	
		
    headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'
	
	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
 }
	
    
/**
* DeleteFolder
* Remove a specific folder. Parameters: path - folder path e.g. /Folder1, storage - user&#39;s storage name, recursive - is subfolders and files must be deleted for specified path.
*
* @param  (String) Path  -  (required) 
* @param  (String) storage  -  (optional) 
* @param  (Boolean) recursive  -  (optional) 
* @returns RemoveFolderResponse (Map)
*/
StorageApi.prototype.DeleteFolder =  function(Path, storage, recursive,  callback ){
	var self = this	;
	
	 Path = typeof  Path !== 'undefined' ? Path : ''; 
	 storage = typeof  storage !== 'undefined' ? storage : ''; 
	 recursive = typeof  recursive !== 'undefined' ? recursive : ''; 
	
    if(Path === ''){
		throw new Error('missing required parameters.');
    }     		
	var resourcePath = '/storage/folder/{path}/?appSid={appSid}&amp;storage={storage}&amp;recursive={recursive}';
    
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	if(Path !== 'undefined' && Path !== null && Path !== ''){
		resourcePath = resourcePath.replace("{" + "Path" + "}" , Path);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]Path.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(storage !== 'undefined' && storage !== null && storage !== ''){
		resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(recursive !== 'undefined' && recursive !== null && recursive !== ''){
		resourcePath = resourcePath.replace("{" + "recursive" + "}" , recursive);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]recursive.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
    
	method = 'DELETE'
	queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;	
	
		
    headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'
	
	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
 }
	
    
/**
* PostMoveFolder
* Move a specific folder. Parameters: src - source folder path e.g. /Folder1, storage - user&#39;s source storage name, dest - destination folder path e.g. /Folder2, destStorage - user&#39;s destination storage name.
*
* @param  (String) src  -  (required) 
* @param  (String) dest  -  (required) 
* @param  (String) storage  -  (optional) 
* @param  (String) destStorage  -  (optional) 
* @returns MoveFolderResponse (Map)
*/
StorageApi.prototype.PostMoveFolder =  function(src, dest, storage, destStorage,  callback ){
	var self = this	;
	
	 src = typeof  src !== 'undefined' ? src : ''; 
	 dest = typeof  dest !== 'undefined' ? dest : ''; 
	 storage = typeof  storage !== 'undefined' ? storage : ''; 
	 destStorage = typeof  destStorage !== 'undefined' ? destStorage : ''; 
	
    if(src === ''){
		throw new Error('missing required parameters.');
    }     if(dest === ''){
		throw new Error('missing required parameters.');
    }     		
	var resourcePath = '/storage/folder/{src}/?dest={dest}&amp;appSid={appSid}&amp;storage={storage}&amp;destStorage={destStorage}';
    
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	if(src !== 'undefined' && src !== null && src !== ''){
		resourcePath = resourcePath.replace("{" + "src" + "}" , src);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]src.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(dest !== 'undefined' && dest !== null && dest !== ''){
		resourcePath = resourcePath.replace("{" + "dest" + "}" , dest);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]dest.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(storage !== 'undefined' && storage !== null && storage !== ''){
		resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(destStorage !== 'undefined' && destStorage !== null && destStorage !== ''){
		resourcePath = resourcePath.replace("{" + "destStorage" + "}" , destStorage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]destStorage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
    
	method = 'POST'
	queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;	
	
		
    headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'
	
	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
 }
	
    
/**
* GetListFileVersions
* Get the file&#39;s versions list. Parameters: path - file path e.g. /file.ext or /Folder1/file.ext, storage - user&#39;s storage name.
*
* @param  (String) Path  -  (required) 
* @param  (String) storage  -  (optional) 
* @returns FileVersionsResponse (Map)
*/
StorageApi.prototype.GetListFileVersions =  function(Path, storage,  callback ){
	var self = this	;
	
	 Path = typeof  Path !== 'undefined' ? Path : ''; 
	 storage = typeof  storage !== 'undefined' ? storage : ''; 
	
    if(Path === ''){
		throw new Error('missing required parameters.');
    }   		
	var resourcePath = '/storage/version/{path}/?appSid={appSid}&amp;storage={storage}';
    
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	if(Path !== 'undefined' && Path !== null && Path !== ''){
		resourcePath = resourcePath.replace("{" + "Path" + "}" , Path);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]Path.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(storage !== 'undefined' && storage !== null && storage !== ''){
		resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
    
	method = 'GET'
	queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;	
	
		
    headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'
	
	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
 }
	
    
/**
* GetIsStorageExist
* Check if a specific storage exists.
*
* @param  (String) name  - Storage name (required) 
* @returns StorageExistResponse (Map)
*/
StorageApi.prototype.GetIsStorageExist =  function(name,  callback ){
	var self = this	;
	
	 name = typeof  name !== 'undefined' ? name : ''; 
	
    if(name === ''){
		throw new Error('missing required parameters.');
    } 		
	var resourcePath = '/storage/{name}/exist/?appSid={appSid}';
    
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	if(name !== 'undefined' && name !== null && name !== ''){
		resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
    
	method = 'GET'
	queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;	
	
		
    headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'
	
	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
 }
	
    
module.exports = StorageApi	
