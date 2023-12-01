import { register } from '../controllers/registration.controller';

describe('registeration', () => {
  describe('register', () => {
    describe('Given all the required fields are provided', () => {
      it('Profile registered successfully', async () => {
        const res = await register({});
        expect(res.status).toBe(200);
      });
    });
  });
});
