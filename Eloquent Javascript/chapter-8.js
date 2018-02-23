/**
 * Created by cassidy on 2/23/18.
 */


(function() {
    "use strict";

    let box = {
        locked: true,
        unlock: function() { this.locked = false; },
        lock: function() { this.locked = true; },
        _content: [],
        get content() {
            if (this.locked) throw new Error("Locked!");
            return this._content;
        }
    };

    function withBoxUnlocked(body) {
        let locked = box.locked;
        if (!locked)
            return body();

        box.unlock();
        try {
            return body();
        } finally {
            box.lock();
        }
    }

    withBoxUnlocked(function() {
        box.content.push("gold piece");
    });

    try {
        withBoxUnlocked(function() {
            throw new Error("Pirates on the horizon! Abort!");
        });
    } catch (e) {
        console.log("Error raised:", e);
    }
    console.log(box.locked);
    // true

    /*
    function canYouSpotTheProblem() {
    let counter;
    for (counter = 0; counter < 10; counter++)
        console.log("Happy happy");
    }

    canYouSpotTheProblem();
    */

    /*
    function numberToString(n, base) {
        var result = "", sign="";

        if (n < 0) {
            sign = "-";
            n = Math.floor(n / base)
        }

        do {
            result = String(n % base) + result;
            n /= base;
        } while (n > 0);

        return sign + result;
    }
    console.log(numberToString(13, 10));
    */

    /*
    function promptNumber(question) {
        let result = Number(prompt(question, ""));
        if (isNaN(result)) return null;
        else return result;
    }

    console.log(promptNumber("How many trees do you see?"));
    */
})();

