////                               1
////           0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 ...
////           _t_h_e_ _q_u_i_c_k_ _b_r_o_w_n_ _f_o_x...

//var string = "the quick brown fox jumped over the lazy dog";
//var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo porttitor bibendum. Morbi pellentesque faucibus diam sed ullamcorper. Sed non consequat augue. In semper urna quis vestibulum tempus. Mauris ac justo vulputate, pellentesque lorem at, rutrum risus. Integer est nisi, facilisis vehicula ultrices at, hendrerit ut augue. Fusce dignissim orci odio, non facilisis lectus molestie vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id placerat libero, at maximus orci. Vivamus nec nulla eros. Integer consequat felis massa, eu ultricies ex facilisis eget. Fusce in magna turpis. Etiam fermentum magna quis dui venenatis, ac consectetur mi imperdiet. Vivamus bibendum purus sit amet congue euismod. Quisque et nisl gravida, viverra orci ac, scelerisque elit. Etiam id ipsum vitae lectus mollis volutpat non a magna. Morbi tristique bibendum nisl quis feugiat. Quisque porta justo a dictum auctor. Maecenas a metus tristique, tempor lorem sit amet, porttitor ex. Donec pretium nisl vel leo pulvinar imperdiet. Donec bibendum elit velit. Curabitur congue lacinia quam, eget maximus sapien maximus at. Curabitur fermentum libero magna, eget dapibus ante luctus vitae. Nulla leo libero, posuere non purus ut, commodo gravida sapien. Vestibulum ac tellus vel metus sodales aliquet. Donec efficitur, justo et egestas consectetur, sem dui maximus nulla, eu efficitur risus ex eget mauris. Fusce non tempus felis. Nulla tincidunt orci augue, vel pulvinar nibh blandit sit amet. Donec et mauris augue. Praesent velit ipsum, eleifend ac bibendum dignissim, porta sed magna. Aliquam molestie odio et eros pretium, sit amet sodales mauris finibus. Etiam iaculis blandit ipsum, ac faucibus lorem euismod non. Maecenas nisi leo, bibendum vestibulum dui vitae, semper ullamcorper neque. Praesent id felis sollicitudin, cursus mi ut, malesuada arcu. Sed commodo mollis nisi, id lobortis nisl egestas eu. Duis sit amet bibendum neque. Praesent laoreet faucibus sapien, sit amet maximus nulla eleifend lobortis. Proin facilisis diam lectus, vitae feugiat massa laoreet at. Morbi nisl mi, pharetra ac auctor nec, euismod eget risus. Ut tempor a mi sit amet commodo. Cras faucibus pharetra dui eu ultricies. Sed quis ornare quam. Sed a lorem risus. Donec eros turpis, finibus ac dui eu, condimentum maximus nibh. Duis mollis, sem sit amet iaculis scelerisque, diam nisi maximus dui, non fermentum enim quam ut nisl. Duis sapien velit, tristique ut tellus et, tincidunt convallis nunc. Fusce tincidunt convallis aliquet. Maecenas pretium erat est. Ut hendrerit metus sit amet bibendum dapibus. Etiam pulvinar hendrerit imperdiet. Proin a erat eu ex mollis dignissim sit amet sit amet nulla. Suspendisse consectetur finibus erat in aliquam. Cras id urna ut nunc eleifend mollis. Pellentesque congue vehicula ante ut suscipit. Morbi nec orci pellentesque, ornare eros sagittis, hendrerit eros. Etiam porttitor facilisis neque, at aliquam ligula iaculis in. Praesent semper ipsum sit amet ante bibendum vestibulum. Ut semper imperdiet odio ac laoreet. Pellentesque vel dapibus metus. Aliquam erat volutpat. Quisque vel sem vulputate, congue tellus semper, congue ex. Nunc in rhoncus urna, sed ornare orci.";

//console.log(string.indexOf("o"));
//console.log(string.indexOf("o", 1));

//var numberOfOs = 0;
//var idx = string.indexOf("e"); // maybe > 0? might be -1?

//while (idx >= 0) {
//    numberOfOs++;
//    idx = string.indexOf("e", idx + 1); // maybe > 0? might be -1?
//}

//console.log(numberOfOs);

//var extractable = "Hello, " + prompt("Enter your name", "") + ". Its a nice day, isn't it?";
////                    1
////0 1 2 3 4 5 6 7 8 9 0 1 2 3
//// H e l l o ,   E r i c . I ts a nice day, isn't it?

//var nameStartIdx = extractable.indexOf(" ") + 1;
//var nameEndIdx = extractable.indexOf(".");
//var name = extractable.substring(nameStartIdx, nameEndIdx);
//var name2 = extractable.substr(nameStartIdx, nameEndIdx - nameStartIdx);

//console.log(name);
//console.log(name2);

//// product id ID###-####
//var productString = "blah blah blah blah ID123-4567 blah blah"

//var prodIdx = productString.indexOf("ID");
//var prod = productString.substring(prodIdx, prodIdx + 10);
//var prod2 = productString.substr(prodIdx, 10);

//console.log(prod);
//console.log(prod2);

//var intel = "An i7 is awesome."

//var idx = intel.indexOf("i");
//var processor = intel.charAt(idx + 1);

//console.log(processor);

//var aString = "the cat is cute";

//var i = 0;
//while (true) {
//    if (aString.charAt(i) === "a") {
//        console.log(i);
//        break;
//    }
//    i++;
//}

//for (var i = 0; i < aString.length; i++) {
//    console.log(aString.charAt(i));
//}


//// \t tab
//// \n new line
//var aUserString = "    \n\t\n    some stuff           \t\n  ";

//console.log("Hello, " + aUserString.trim() + ".");

//var a = "the quick brown fox jumped over the lazy dog";

//// substring 0-fox + cat + substring fox-end

//console.log(a);
//console.log(a.replace("fox", "cat"));
//console.log(a);
//console.log(a.replace(/fox/, "cat"));
//console.log(a);
//console.log(a.replace(/e/g, "E"));
//a = a.replace(/e/g, "E");
//console.log(a);