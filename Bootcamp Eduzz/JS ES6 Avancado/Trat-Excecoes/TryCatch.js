class CustomError extends Error {
    constructor ({message, data}){
        super(message);
        this.data = data;
    }
}


try {
    const name = 'Lucas';
    const myError = new CustomError({
        message: 'Mensagem de erro do customerror',
        data: {
            type: 'Server error'
        }
    });
    throw myError;
} catch (err) {
    console.log('Error: ', err);
    console.log('data: ', err.data);

} finally{
    console.log('Keep going...');
}