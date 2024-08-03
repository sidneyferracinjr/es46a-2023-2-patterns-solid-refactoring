class IStrategy {
    execute() {
        throw new Error("Method 'execute' must be implemented.");
    }
}

module.exports = IStrategy;