exports.models = {
  "PageBorderAppliesTo": {
  "id" : "PageBorderAppliesTo"
},"TextEffect": {
  "id" : "TextEffect"
},"RemoveFolderResponse": {
  "properties" : {
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "RemoveFolderResponse"
},"FileExist": {
  "properties" : {
    "IsExist" : {
      "type" : "boolean"
    },
    "IsFolder" : {
      "type" : "boolean"
    }
  },
  "id" : "FileExist"
},"FileVersion": {
  "properties" : {
    "VersionId" : {
      "type" : "string"
    },
    "IsLatest" : {
      "type" : "boolean"
    },
    "Name" : {
      "type" : "string"
    },
    "IsFolder" : {
      "type" : "boolean"
    },
    "ModifiedDate" : {
      "$ref" : "DateTime"
    },
    "Size" : {
      "$ref" : "long"
    },
    "Path" : {
      "type" : "string"
    }
  },
  "id" : "FileVersion"
},"DiscUsageResponse": {
  "properties" : {
    "DiscUsage" : {
      "$ref" : "DiscUsage"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "DiscUsageResponse"
},"PageBorderDistanceFrom": {
  "id" : "PageBorderDistanceFrom"
},"ResponseMessage": {
  "properties" : {
    "Code" : {
      "$ref" : "int"
    },
    "Message" : {
      "type" : "string"
    }
  },
  "id" : "ResponseMessage"
},"FileExistResponse": {
  "properties" : {
    "FileExist" : {
      "$ref" : "FileExist"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "FileExistResponse"
},"PaperSize": {
  "id" : "PaperSize"
},"LineNumberRestartMode": {
  "id" : "LineNumberRestartMode"
},"DayOfWeek": {
  "id" : "DayOfWeek"
},"FileVersionsResponse": {
  "properties" : {
    "FileVersions" : {
      "type" : "array",
      "items" : {
        "$ref" : "FileVersion"
      }
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "FileVersionsResponse"
},"ReportType": {
  "id" : "ReportType"
},"DateTime": {
  "properties" : {
    "Day" : {
      "$ref" : "int"
    },
    "DayOfWeek" : {
      "type" : "string"
    },
    "DayOfYear" : {
      "$ref" : "int"
    },
    "Hour" : {
      "$ref" : "int"
    },
    "Kind" : {
      "type" : "string"
    },
    "Millisecond" : {
      "$ref" : "int"
    },
    "Minute" : {
      "$ref" : "int"
    },
    "Month" : {
      "$ref" : "int"
    },
    "Second" : {
      "$ref" : "int"
    },
    "Ticks" : {
      "$ref" : "long"
    },
    "TimeOfDay" : {
      "type" : "string"
    },
    "Year" : {
      "$ref" : "int"
    }
  },
  "id" : "DateTime"
},"Underline": {
  "id" : "Underline"
},"DiscUsage": {
  "properties" : {
    "UsedSize" : {
      "$ref" : "long"
    },
    "TotalSize" : {
      "$ref" : "long"
    }
  },
  "id" : "DiscUsage"
},"MoveFileResponse": {
  "properties" : {
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "MoveFileResponse"
},"HttpStatusCode": {
  "id" : "HttpStatusCode"
},"Orientation": {
  "id" : "Orientation"
},"RemoveFileResponse": {
  "properties" : {
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "RemoveFileResponse"
},"NumberStyle": {
  "id" : "NumberStyle"
},"PageVerticalAlignment": {
  "id" : "PageVerticalAlignment"
},"DateTimeKind": {
  "id" : "DateTimeKind"
},"TimeSpan": {
  "properties" : {
    "Ticks" : {
      "$ref" : "long"
    },
    "Days" : {
      "$ref" : "int"
    },
    "Hours" : {
      "$ref" : "int"
    },
    "Milliseconds" : {
      "$ref" : "int"
    },
    "Minutes" : {
      "$ref" : "int"
    },
    "Seconds" : {
      "$ref" : "int"
    },
    "TotalDays" : {
      "$ref" : "double"
    },
    "TotalHours" : {
      "$ref" : "double"
    },
    "TotalMilliseconds" : {
      "$ref" : "double"
    },
    "TotalMinutes" : {
      "$ref" : "double"
    },
    "TotalSeconds" : {
      "$ref" : "double"
    }
  },
  "id" : "TimeSpan"
},"StyleIdentifier": {
  "id" : "StyleIdentifier"
},"StorageExistResponse": {
  "properties" : {
    "IsExist" : {
      "type" : "boolean"
    },
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "StorageExistResponse"
},"MoveFolderResponse": {
  "properties" : {
    "Code" : {
      "type" : "string"
    },
    "Status" : {
      "type" : "string"
    }
  },
  "id" : "MoveFolderResponse"
},"SectionStart": {
  "id" : "SectionStart"
},"HttpResponseMessage": {
  "properties" : {
    "Content" : {
      "type" : "string"
    },
    "Headers" : {
      "type" : "string"
    },
    "IsSuccessStatusCode" : {
      "$ref" : "bool"
    },
    "ReasonPhrase" : {
      "type" : "string"
    },
    "RequestMessage" : {
      "type" : "string"
    },
    "StatusCode" : {
      "type" : "string"
    },
    "Version" : {
      "type" : "string"
    }
  },
  "id" : "HttpResponseMessage"
}
}