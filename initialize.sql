USE DB1;

DROP TABLE IF EXISTS employeesAddress;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE employeesContact (
  id INT NOT NULL AUTO_INCREMENT,
  phone1 VARCHAR(50),
  phone2 VARCHAR(50),
  email VARCHAR(50),
  PRIMARY KEY (id)
  );
  
  CREATE TABLE employeesAddress (
  id INT NOT NULL AUTO_INCREMENT,
  address VARCHAR(100),
  city VARCHAR(50),
  county VARCHAR(50),
  state VARCHAR(50),
  zip VARCHAR(50),
  PRIMARY KEY (id)
  );
  
INSERT INTO employees
	(first_name, last_name)
VALUES 
  ("James","Butt"),
  ("Josephine","Darakjy"),
  ("Art","Venere"),
  ("Lenna","Paprocki"),
  ("Donette","Foller"),
  ("Simona","Morasca"),
  ("Mitsue","Tollner"),
  ("Leota","Dilliard"),
  ("Sage","Wieser"),
  ("Kris","Marrier"),
  ("Minna","Amigon"),
  ("Abel","Maclead"),
  ("Kiley","Caldarera"),
  ("Graciela","Ruta"),
  ("Cammy","Albares"),
  ("Mattie","Poquette"),
  ("Meaghan","Garufi"),
  ("Gladys","Rim"),
  ("Yuki","Whobrey"),
  ("Fletcher","Flosi"),
  ("Bette","Nicka"),
  ("Veronika","Inouye"),
  ("Willard","Kolmetz"),
  ("Maryann","Royster"),
  ("Alisha","Slusarski"),
  ("Allene","Iturbide"),
  ("Chanel","Caudy"),
  ("Ezekiel","Chui"),
  ("Willow","Kusko"),
  ("Bernardo","Figeroa"),
  ("Ammie","Corrio"),
  ("Francine","Vocelka"),
  ("Ernie","Stenseth"),
  ("Albina","Glick"),
  ("Alishia","Sergi"),
  ("Solange","Shinko");
  
  SELECT * FROM employees;
  
  INSERT INTO employeesContact
	(phone1, phone2, email)
VALUES 
  ("626-572-1096","626-696-2777","cory.gibes@gmail.com"),
  ("607-407-3716","607-350-7690","kirk.herritt@aol.com"),
  ("510-677-9785","510-942-5916","joesph_degonia@degonia.org"),
  ("415-423-3294","415-926-6089","lai@gmail.com"),
  ("415-306-7897","415-874-2984","norah.waymire@gmail.com"),
  ("508-456-4907","508-658-7802","levi.munis@gmail.com"),
  ("817-765-5781","817-577-6151","barrett.toyama@toyama.org"),
  ("703-322-4041","703-938-7939","taryn.moyd@hotmail.com"),
  ("208-709-1235","208-206-9848","bgillaspie@gillaspie.com"),
  ("973-210-3994","973-491-8723","catarina_gleich@hotmail.com"),
  ("410-669-1642","410-235-8738","ezekiel@chui.com"),
  ("812-368-1511","812-442-8544","kristofer.bennick@yahoo.com"),
  ("510-993-3758","510-901-7640","dominque.dickerson@dickerson.org"),
  ("317-825-4724","317-342-1532","raymon.calvaresi@gmail.com"),
  ("401-948-4982","401-552-9059","caitlin.julia@julia.org"),
  ("574-656-2800","574-405-1983","ajeanty@gmail.com"),
  ("203-506-4706","203-840-8634","yoko@fishburne.com"),
  ("213-975-8026","213-696-8004","cristal@cox.net"),
  ("510-955-3016","510-755-9274","devora_perez@perez.org"),
  ("419-975-3182","419-417-4674","mollie_mcdoniel@yahoo.com"),
  ("516-816-1541","516-749-3188","sbourbon@yahoo.com"),
  ("775-501-8109","775-848-9135","choa@hoa.org"),
  ("602-390-4944","602-330-6894","christiane.eschberger@yahoo.com"),
  ("408-758-5015","408-346-2180","merilyn_bayless@cox.net"),
  ("972-934-6914","972-821-7118","gearldine_gellinger@gellinger.com"),
  ("352-598-8301","352-947-6152","nickolas_juvera@cox.net"),
  ("760-616-5388","760-493-9208","gail_similton@similton.com"),
  ("814-865-8113","814-481-1700","jacqueline.rowling@yahoo.com"),
  ("850-430-1663","850-330-8079","marge@gmail.com"),
  ("512-213-8574","512-693-8345","rgesick@gesick.org"),
  ("973-936-5095","973-822-8827","heike@gmail.com"),
  ("516-948-5768","516-357-3362","theola_frey@frey.com"),
  ("805-275-3566","805-638-6617","shawna_palaspas@palaspas.org"),
  ("518-497-2940","518-931-7852","hdemesa@cox.net"),
  ("901-901-4726","901-739-5892","bernardine_rodefer@yahoo.com"),
  ("512-587-5746","512-528-9933","fannie.lungren@yahoo.com");
  
  SELECT * FROM employeesContact;
  
  INSERT INTO employeesAddress
	(address, city, county, state, zip)
VALUES 
  ("6649 N Blue Gum St","New Orleans","Orleans","LA",70116),
  ("4 B Blue Ridge Blvd","Brighton","Livingston","MI",48116),
  ("8 W Cerritos Ave #54","Bridgeport","Gloucester","NJ","08014"),
  ("639 Main St","Anchorage","Anchorage","AK",99501),
  ("34 Center St","Hamilton","Butler","OH",45011),
  ("3 Mcauley Dr","Ashland","Ashland","OH",44805),
  ("7 Eads St","Chicago","Cook","IL",60632),
  ("7 W Jackson Blvd","San Jose","Santa Clara","CA",95111),
  ("5 Boston Ave #88","Sioux Falls","Minnehaha","SD",57105),
  ("228 Runamuck Pl #2808","Baltimore","Baltimore City","MD",21224),
  ("2371 Jerrold Ave","Kulpsville","Montgomery","PA",19443),
  ("37275 St  Rt 17m M","Middle Island","Suffolk","NY",11953),
  ("25 E 75th St #69","Los Angeles","Los Angeles","CA",90034),
  ("98 Connecticut Ave Nw","Chagrin Falls","Geauga","OH",44023),
  ("56 E Morehead St","Laredo","Webb","TX",78045),
  ("73 State Road 434 E","Phoenix","Maricopa","AZ",85013),
  ("69734 E Carrillo St","Mc Minnville","Warren","TN",37110),
  ("322 New Horizon Blvd","Milwaukee","Milwaukee","WI",53207),
  ("1 State Route 27","Taylor","Wayne","MI",48180),
  ("394 Manchester Blvd","Rockford","Winnebago","IL",61109),
  ("6 S 33rd St","Aston","Delaware","PA",19014),
  ("6 Greenleaf Ave","San Jose","Santa Clara","CA",95111),
  ("618 W Yakima Ave","Irving","Dallas","TX",75062),
  ("74 S Westgate St","Albany","Albany","NY",12204),
  ("3273 State St","Middlesex","Middlesex","NJ","08846"),
  ("1 Central Ave","Stevens Point","Portage","WI",54481),
  ("86 Nw 66th St #8673","Shawnee","Johnson","KS",66218),
  ("2 Cedar Ave #84","Easton","Talbot","MD",21601),
  ("90991 Thorburn Ave","New York","New York","NY",10011),
  ("386 9th Ave N","Conroe","Montgomery","TX",77301),
  ("74874 Atlantic Ave","Columbus","Franklin","OH",43215),
  ("366 South Dr","Las Cruces","Dona Ana","NM",88011),
  ("45 E Liberty St","Ridgefield Park","Bergen","NJ","07660"),
  ("4 Ralph Ct","Dunellen","Middlesex","NJ","08812"),
  ("2742 Distribution Way","New York","New York","NY",10025),
  ("426 Wolf St","Metairie","Jefferson","LA",70002);
 
  
  SELECT * FROM employeesAddress