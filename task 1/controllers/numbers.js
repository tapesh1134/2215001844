const fibonacciController = (req, res) => {
    const { n } = req.body;
    if (isNaN(n) || n < 0) {
        res.status(400).send('write n');
    } else {
        const fibonacci = (num) => (num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2));
        res.json({ numbers: fibonacci(n) });
    }
};

const randomController = (req, res) => {
    const { min } = req.body;
    const { max } = req.body;
    if (min > max) {
        res.status(400).send('give range');
    } else {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        res.json({ numbers: random });
    }
};

const evenController = (req, res) => {
    const { n } = req.body;
    if (isNaN(n)) {
        res.status(400).send('enter integer n');
    } else {
        const isEven = n % 2 === 0;
        res.json({ numbers: isEven });
    }
};

const primeController = (req, res) => {
    const { n } = req.body;
    if (isNaN(n) || n < 2) {
        res.status(400).send('enter integer greater than or equal to 2');
    } else {
        const isPrime = (num) => {
            for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
                if (num % i === 0) return false;
            }
            return true;
        };
        res.json({ numbers: isPrime(n) });
    }
};

module.exports = {
    fibonacciController,
    randomController,
    evenController,
    primeController
};
