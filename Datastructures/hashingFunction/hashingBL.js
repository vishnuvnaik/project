/**
 * @description : Search a number from the file using hashing functions
 * @param  : {data}
 * @return  : Displays the number in the inputted index
 */

exports.hashingFunction = (data) => {
    try {
        class HashTable {
            constructor() {
                this.buckets = new Array(11);
            }
            hash(data) {
                return data % 11;
            }
            set(key, value) {
                let index = this.hash(key);
                this.buckets[index] = value;
            }
            get(key) {
                const index = this.hash(key);
                return this.buckets[index];
            }

        }
        let hashTable = new HashTable();
        let i = 0;
        while (i < data.length) {
            hashTable.set(data[i], data[i]);
            i++;
        }
        console.log(hashTable.get(11))

    } catch (error) {
        console.log(error)
    }
}