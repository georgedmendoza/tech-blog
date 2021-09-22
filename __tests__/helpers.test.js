const { format_date, format_plural, format_url } = require('../utils/helpers');

test('format_date() date to bein a string format', () => {
    const date = new Date('2021-10-09 12:10:21');

    expect(format_date(date)).toBe('10/9/2021')
});

test('format_plural() return pluralized words correctly', () => {
    const word1 = format_plural('tiger',1);
    const word2 = format_plural('lion',2);

    expect(word1).toBe('tiger');
    expect(word2).toBe('lions')
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
})