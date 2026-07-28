function expect(val) {

    return {

        toBe: function(other) {

            if (val === other) {
                return true;
            }

            throw new Error("Not Equal");
        },

        notToBe: function(other) {

            if (val !== other) {
                return true;
            }

            throw new Error("Equal");
        }

    };

}

// ---------------- Test Case 1 ----------------
try {
    console.log(expect(5).toBe(5));
} catch (e) {
    console.log(e.message);
}

// ---------------- Test Case 2 ----------------
try {
    console.log(expect(5).toBe(null));
} catch (e) {
    console.log(e.message);
}

// ---------------- Test Case 3 ----------------
try {
    console.log(expect(5).notToBe(null));
} catch (e) {
    console.log(e.message);
}

// ---------------- Test Case 4 ----------------
try {
    console.log(expect(5).notToBe(5));
} catch (e) {
    console.log(e.message);
}