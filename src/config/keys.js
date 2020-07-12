export default {
    jwt: {
        secret: 'xxxxxxxx', // Code to verify signature
        session: { session: false }
    },
    mongodb: { // Database hosted on Mlab
        mlab: 'mongodb://manfred:xxxxxx@xxxxxx.mlab.com:61255/webedia'
    },
    server: { // Setting port
        port: process.env.PORT || 3000
    }
}
