import { getProfile, updateProfile } from '../controllers/user.controller';

describe('user', () => {
  describe('getProfile', () => {
    describe('Given the user is authenticated', () => {
      it('Profile retrieved successfully', async () => {
        const res = await getProfile({});
        expect(res.status).toBe(200);
      });
    });
  });
});

describe('user', () => {
  describe('updateProfile', () => {
    describe('Given the user is authenticated', () => {
      it('Profile updated successfully', async () => {
        const res = await updateProfile({});
        expect(res.status).toBe(200);
      });
    });
  });
});
