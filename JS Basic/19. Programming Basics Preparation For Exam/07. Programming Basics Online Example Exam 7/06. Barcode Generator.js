function barcodeGenerator(b, e) {

    b += '';
    e += '';
    
    let begin1 = Number(b.charAt(0))
    let end1 = Number(e.charAt(0));
    let begin2 = Number(b.charAt(1));
    let end2 = Number(e.charAt(1));
    let begin3 = Number(b.charAt(2));
    let end3 = Number(e.charAt(2));
    let begin4 = Number(b.charAt(3));
    let end4 = Number(e.charAt(3));

    let begin1Number = Number(begin1);
    let print = "";

    for (let i = begin1; i <= end1; i++) {

        for (let index = begin2; index <= end2; index++) {

            for (let qi = begin3; qi <= end3; qi++) {

                for (let ops = begin4; ops <= end4; ops++) {

                    if (i % 2 !== 0) {

                        if (index % 2 !== 0) {

                            if (qi % 2 !== 0) {

                                if (ops % 2 !== 0) {

                                    print += "" + i + index + qi + ops + " ";
                                    continue;

                                }

                                continue;

                            }

                            continue;

                        }

                        continue;

                    }
                }
            }
        }
    }

    console.log(print);

}
barcodeGenerator(2345, 6789);
barcodeGenerator(3256, 6579);
barcodeGenerator(1365, 5877);