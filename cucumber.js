module.exports = {
    default: {
        requireModule: ['ts-node/register'],
        paths: ['tests/features/**/*.feature'],
        require: ['tests/step_definitions/**/*.ts']
    }
};