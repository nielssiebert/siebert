import json
class SuccessResponse():
    def __init__(self, message, summery, severity):
        self.message = message
        self.summery = summery
        self.severity = severity
        
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)