export default {
    jwt: {
        secret: 'hes9n0pxcYeJK7A0s0aZ', // Code to verify signature
        session: { session: false }
    },
    mongodb: { // Database hosted on Mlab
        mlab: 'mongodb://manfred:aidebew02@ds161255.mlab.com:61255/webedia'
    },
    server: { // Setting port
        port: process.env.PORT || 3000
    }
}