// /010-1234-5678/.test("010-1234-5678")
// true

// /^010-1234-5678$/.test("010-1234-5678")
// true

// /^\d+-1234-5678$/.test("abcde-1234-5678")
// false

// /^\d+-1234-5678$/.test("070-1234-5678")
// true

// /^\d{3}-1234-5678$/.test("1234-1234-5678")
// false

// /^\d{3}-1234-5678$/.test("010-1234-5678")
// true

// /^\d{3}-\d{3,4}-\d{4}$/.test("010-123-5678")
// true

// /^\d{3}-\d{3,4}-\d{4}$/.test("010-1234-5678")
// true

// [a-zA-Z] : 문자만

// \s : 스페이스바
