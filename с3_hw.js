class ElectricalAppliance{
    constructor(model, power) {
      this.model = model;
      this.power = power;
      this.isPlugged = false;
    }
  
    plugIn() {
      this.isPlugged = true;
      return console.log(this.model + " is plugged!");
      
    }
  
    unplug() {
      this.isPlugged = false;
      return console.log(this.model + " is unplugged!");  
    }
  }
    
  class Phone extends ElectricalAppliance{
    constructor(model, brand, power, color, mp){
      super(model, power);    
      this.brand = brand;
      this.color = color;
      this.mp = mp;
      this.isPlugged = true;
    }
  }
  
  class HeadPhones extends ElectricalAppliance{
    constructor(model, brand, power, type, color, microphone){
      super(model, power);
      this.brand = brand;
      this.type = type;
      this.color = color;
      this.microphone = microphone;
      this.isPlugged = false;
      }
  }
  
  const new_Iphone = new Phone("15 Plus", "Apple Iphone", 5000, "black", "48");
  
  const new_HeadPhones = new HeadPhones("3 Pro", "Apple AirPods", 2000, "TWS","White", "Yes");
  
  new_HeadPhones.unplug();
  new_Iphone.plugIn();
  console.log(new_Iphone)
  console.log(myCofnew_HeadPhonesfeMachine)