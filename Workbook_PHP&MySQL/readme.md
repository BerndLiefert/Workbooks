PHP & MySQL Workbook	Stand: 10/18/2014 3:43:35 PM 
====================================================
Objekte
-------

![paul](files/paul.png)



	class Vehicle{

	private $velocity = 0;

		function accelerate($value){

			$this->velocity += $value;

		}

		function issue(){

			echo "Speed: $this->velocity<br>";

		}

	}

	$mercedes = new Vehicle();
	$mercedes->issue();
	$mercedes->accelerate(20);
	$mercedes->issue();

Ausgabe   
Speed: 0    
Speed: 20


##Konstruktor

	class Vehicle{

	private $description; 
	private $velocity;
	private $color;

		//Constructor
		function __construct($desc, $vel, $col){

			$this->description = $desc;
			$this->velocity = $vel;
			$this->color = $col;
		}

		function accelerate($value){

			$this->velocity += $value;

		}

		function issue(){

			echo "Description: $this->description, Speed: $this->velocity, Color: $this->color<br>";

		}

	}

	$vw = new Vehicle("Golf 5", 20, "blue");
	$vw->issue();

Ausgabe    
Description: Golf 5, Speed: 20, Color: blue

##toString

	class Vehicle{

	private $description; 
	private $velocity;
	private $color;

		//Constructor
		function __construct($desc, $vel, $col){

			$this->description = $desc;
			$this->velocity = $vel;
			$this->color = $col;
		}

		function accelerate($value){

			$this->velocity += $value;

		}

		function __toString(){

			return "Description: $this->description, Speed: $this->velocity, Color: $this->color<br>";

		}

	}

	$vw = new Vehicle("Golf 5", 20, "blue");
	echo $vw;

Ausgabe    
Description: Golf 5, Speed: 20, Color: blue

##Vererbung


	class Vehicle{

	private $description; 
	private $velocity;
	private $color;

		//Constructor
		function __construct($desc, $vel, $col){

			$this->description = $desc;
			$this->velocity = $vel;
			$this->color = $col;
		}

		function accelerate($value){

			$this->velocity += $value;

		}

		function issue(){

			echo "Description: $this->description, Speed: $this->velocity, Color: $this->color<br>";

		}

	}

	class Truck extends Vehicle{

		private $passenger = 0;

		function access($count){

			$this->passenger += $count;		

		}

		function leave($count){

			$this->passenger -= $count;		

		}

		function issue(){

			echo "Passenger: $this->passenger<br>";
			//call issue from Vehicle
			parent::issue();
		}

	}

	$scania = new Truck("R-Typ", 20, "red");
	$scania->access(2);
	$scania->issue();
	
Ausgabe    
Passenger: 2   
Description: R-Typ, Speed: 20, Color: red


##Bla 10/18/2014 6:43:21 PM 

	class Vehicle{

	private $description; 
	private $velocity;
	private $color;

		//Constructor
		function __construct($desc, $vel, $col){

			$this->description = $desc;
			$this->velocity = $vel;
			$this->color = $col;
		}

		function accelerate($value){

			$this->velocity += $value;

		}

		function __toString(){

			return "Description: $this->description, Speed: $this->velocity, Color: $this->color<br>";

		}

	}

	class Truck extends Vehicle{

		private $passenger = 0;

		function access($count){

			$this->passenger += $count;		

		}

		function leave($count){

			$this->passenger -= $count;		

		}

		function __construct($desc, $vel, $col, $pas){
		
			$this->passenger = $pas;
			parent::__construct($desc, $vel, $col);
			
		}

		function __toString(){

			return "Passenger: $this->passenger<br>".
			parent::__toString();

		}

	}

	$scania = new Truck("R-Typ", 20, "red", 4);
	echo $scania;
	
