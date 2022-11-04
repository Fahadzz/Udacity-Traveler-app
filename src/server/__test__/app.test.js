const request = require('supertest');
const app = require('../app');

describe('GET /data', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/data')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('POST /data', function () {
    it('Post data to /data', function (done) {
        request(app)
            .post('/data')
            .send({ location: 'osaka' })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});