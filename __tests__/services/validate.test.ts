import { validate } from '../../services/validation'

describe('Validate', () => {
    it('should fail on invalid JSON data', () => {
        expect(validate({ a: 1 })).toBeFalsy()
    })
})
