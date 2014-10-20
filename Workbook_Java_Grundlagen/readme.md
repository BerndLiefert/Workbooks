    Quellcode einrücken [Alt] + [Umschalt] + [F]

##sortierte Kollektionen 10/20/2014 8:00:00 AM 

* einige Kollenktionen fügen die Elemente &lt;E&gt; auf Basis einer Sortierreihenfolge ein

<u>Tree</u>Set


    F, A, B, C, D, I

			(C)
		   /   \
		 (B)   (F)
         /     / \
	   (A)	 (D) (I)


			(3)
		   /   \
		 (2)   (5)
         /     / \
	   (1)	 (4) (6)

TreeSet<Integer> -&gt; sortiert nach den Zahlenwert    
TreeSet<String> -&gt; lexikografische Ordnung    
TreeSet<Car> -&gt; ???

- die sortierten Kollektionen erwarten, dass die Argumente für die generische Typparameter Klassen sind, deren Objekte sich vergleichen lassen
- in diesem Sinne vergleichbar wären Klassen, die 
    1. von Compareator ableiten
    2. Comparable implementieren
- sowohl bei der Ableitung als auch der Implementierung dreht sich alles um die <u>abstrakte</u> Methode **compare**

![compare.png](compare.png)

- das Interface Comparable erwartet die Implementierung der abstrakten Methode **compareTo**

![compare2.png](compare2.png)

![comparator.png](Comparator.png)

    													dependency injection
    TreeSet&lt;HoppeCar&gt; thc = new TreeSet&lt;&gt;(new MileageCoparator())
    TreeSet&lt;HoppeCar&gt; thcA = new TreeSet&lt;&gt;(new HorsePowerCoparator())
														dependecy injection

##Map 10/20/2014 4:00:00 PM 

    Key => Value

<u>Hash</u>Map, <u>Tree</u>Map

TreeMap -&gt; sortierte Map   
HashMap -&gt; Hashfunktion beschleunigt den Zugriff auf die Elemente    


	class HashMap<K, V>
	//K -> Typ der Schlüsselwerte
	//V -> Typ der gemappten Werte

![HashMap](hashmap.png)





    
	   
 



 