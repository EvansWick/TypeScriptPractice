// Reverse enum
enum Directions {
    Up,
    Down,
    Left,
    Right
}

Directions[0]; // "Up"
Directions[1]; // "Down"
Directions[2]; // "Left"
Directions[3]; // "Right"


enum AccessLevel {
    Guest = 'Гість',
    User = 'Користувач',
    Moderator = 'Модератор',
    Admin = 'Адміністратор'
}

const currentLevel: AccessLevel = AccessLevel.Moderator;
console.log(`Ваш рівень доступу: ${currentLevel}`);