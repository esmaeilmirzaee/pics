## Vim Cheat Sheet

### Navigation

- End of the file: shift + g
- Next line: j
- Go down a defined number of lines: number + j
- Skip to next word: w
- Skip back a word: b
- Skip to next section: W
- Skip back to previous section: B
- Go to end of the line: $
- Go to beginning of the line: 0
- Go to top of the screen: shift + h
- Go to bottom of the screen: shift + l
- Forward multiple words: 5w
- Forward multiple letters: 5l
- Back multiple letters: 5h
- Forward to the next 'y': fy (case sensitive)

### Editing

- Undo: u
- Redo: ctrl + r
- Inserting text where the cursor is: i
- Inserting text at the start of the line: I
- Insert at the end of the line: shift + a
- Copy entire line: yy or Y
- Paste copied line: p
- Change multiple words: 5cw
- Insert at the end of the line: A

### Deleting

- d<leftArrow> will delete current and left character
- d$ will delete from current position to end of line
- d^ will delete from current backward to first non-white-space character
- d0 will delete from current backward to beginning of line
- dw deletes current to end of current word (including trailing space)
- db deletes current to beginning of current word
- Delete current line: dd
- Join the line below: shift + j
- Delete entire word: cw
- Delete to the end of the line: shift + C
- Delete multiple lines: d + number of lines + enter
- Delete from current position to a specific line number: d<line number>G
- Deleting all items in a file that start with a pattern: :g/< search term>/d
- Deleting all lines that are empty or that contain only whitespace: :g/^\s\*$/d

### Selecting

- Select the entire line: V
- Select a range of text: v
- Select a column: control + v
- Reselect a block: gv
- Select all: ggVG

### Find and Replace

- %s/pattern/text to replace

### Saving

- Save the file: :w
- Save the file and quit: :wq
- Quit without saving: :q!

### Views

- Use horizontal split: :sp filename
- Use vertical split: :vsp filename
- Switch from top to bottom: control + w + j
- Switch from left to right: control + w + l
- Switch from bottom to top: control + w + j
- Switch from right to left: control + w + h

### Search

- While on current line: f + <queried item>
- Search for word in file: /word + enter
- Find next search result: n
- Search backwards: N
- Go to first result: ggn
- Go to last result: GN
- To remove search highlighting: :noh

### Modes

- Normal
- Insert
- Visual
- Replace
- Command Line

### Multiple Files

- :e filename - Edit a file in a new buffer
- :bnext (or :bn) - go to next buffer
- :bprev (of :bp) - go to previous buffer
- :bd - delete a buffer (close a file)
- :sp filename - Open a file in a new buffer and split window
- ctrl + ws - Split windows
- ctrl + ww - switch between windows
- ctrl + wq - Quit a window
- ctrl + wv - Split windows vertically

### Indenting

- Fix indenting when pasting: set paste in .vimrc file
- Indenting: visual mode + > or <
- Repeat indenting: .

## Commenting/Uncommenting

- Comment: visual block select with CTRL-V then I# (insert # in the begining)
- Uncomment: visual block select with CTRL-V then X (delete the first symbol on the line)

### Visual Mode

- Changing multiple lines of text: control + v + shift + i + action + esc
- Select elements in paragraph: v + / + content

### Display settings

- Turning on line numbers: :set nu
- Turning on syntax highlighting: :syntax on

### Reseting Vim Settings

```
cd
mv .vimrc .vimrc-old
mv .vim .vim-old
touch .vimrc; mkdir .vim
```

### Help

- To get help: :h <topic>
- To exit help: :bd

### Removing blocks of text in code files

- `c + i + t` will remove the code between HTML tags, such as: `<div>Some content</div>`
- `c + i + }` will remove the code inside of a JavaScript function

---

let s:gui.background = { 'dark': '#263238', 'light': '#FAFAFA', 'palenight': '#292D3E', 'oceanic': '#0F111A' }
let s:gui.foreground = { 'dark': '#ECEFF1', 'light': '#666666', 'palenight': '#A6ACCD', 'oceanic': '#A6ACCD' }
let s:gui.none = { 'dark': 'NONE', 'light': 'NONE', 'palenight': 'NONE' , 'oceanic': 'NONE' }
let s:gui.selection = { 'dark': '#455A64', 'light': '#CCEAE7', 'palenight': '#434A6C', 'oceanic': '#292D3E' }
let s:gui.line = { 'dark': '#212121', 'light': '#EAEFF0', 'palenight': '#191919', 'oceanic': '#191919' }
let s:gui.comment = { 'dark': '#5D818E', 'light': '#90A4AE', 'palenight': '#676E95', 'oceanic': '#525975' }

let s:gui.red = { 'dark': '#FF5370', 'light': '#E53935', 'palenight': '#FF5370', 'oceanic': '#FF5370' }
let s:gui.dark_red = { 'dark': '#B71C1C', 'light': '#E53935', 'palenight': '#FF5370', 'oceanic': '#FF5370' }
let s:gui.pink = { 'dark': '#F07178', 'light': '#FF5370', 'palenight': '#F07178', 'oceanic': '#F07178' }
let s:gui.orange = { 'dark': '#F78C6C', 'light': '#F76D47', 'palenight': '#F78C6C', 'oceanic': '#F78C6C' }
let s:gui.light_yellow = { 'dark': '#FFE57F', 'light': '#FFAD13', 'palenight': '#FFE57F', 'oceanic': '#FFE57F' }
let s:gui.yellow = { 'dark': '#FFCB6B', 'light': '#FFAD13', 'palenight': '#FFCB6B', 'oceanic': '#FFCB6B' }
let s:gui.green = { 'dark': '#C3E88D', 'light': '#82A550', 'palenight': '#C3E88D', 'oceanic': '#C3E88D' }
let s:gui.teal = { 'dark': '#004D40', 'light': '#CCEAE7', 'palenight': '#004D40', 'oceanic': '#004D40' }
let s:gui.light_teal = { 'dark': '#69F0AE', 'light': '#73B6B0', 'palenight': '#69F0AE', 'oceanic': '#69F0AE' }
let s:gui.pale_blue = { 'dark': '#B2CCD6', 'light': '#8796B0', 'palenight': '#B2CCD6', 'oceanic': '#B2CCD6' }
let s:gui.cyan = { 'dark': '#89DDFF', 'light': '#39ADB5', 'palenight': '#89DDFF', 'oceanic': '#89DDFF' }
let s:gui.blue = { 'dark': '#82AAFF', 'light': '#6182B8', 'palenight': '#82AAFF', 'oceanic': '#82AAFF' }
let s:gui.purple = { 'dark': '#C792EA', 'light': '#7C4DFF', 'palenight': '#C792EA', 'oceanic': '#C792EA' }
let s:gui.violet = { 'dark': '#BB80B3', 'light': '#945EB8', 'palenight': '#BB80B3', 'oceanic': '#BB80B3' }
let s:gui.brown = { 'dark': '#AB7967', 'light': '#AB7967', 'palenight': '#C17E70', 'oceanic': '#C17E70' }
