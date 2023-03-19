import json
import os

def generate_crossword(year, month, day):

    # Open and load json file
    try:
        f = open("puzzles_dataset/" + str(year) + "/" + str(month) + "/" + str(day) + "/puzzle.json")
        puzzle = json.load(f)
    except:
        return

    # get metadata
    rows = puzzle["metadata"]["rows"]
    cols = puzzle["metadata"]["columns"]

    # get clues
    across = puzzle["key"]["across"]
    down = puzzle["key"]["down"]

    # generate solved board
    board_solved = puzzle["puzzle"].split("\n")[:-1]
    for row in range(rows):
        board_solved[row] = list(board_solved[row])
    for row in range(rows): # check for puzzles that don't fit
        if len(board_solved[row]) != cols:
            return

    # generate unsolved board
    board_unsolved = [["-" for col in range(cols)] for row in range(rows)]
    across_nums = list(across)
    down_nums = list(down)
    for row in range(rows):
        for col in range(cols):
            if board_solved[row][col] == " ":
                board_unsolved[row][col] = "#"
            else:
                if col == 0 or board_unsolved[row][col - 1] == "#":
                    try:
                        board_unsolved[row][col] = across_nums.pop(0)
                    except:
                        return
                if row == 0 or board_unsolved[row - 1][col] == "#":
                    try:
                        board_unsolved[row][col] = down_nums.pop(0)
                    except:
                        return
    
    # generate clues
    clues = {"across": {}, "down": {}}
    for clue in across:
        clues["across"][clue] = {"clue": across[clue]["clue"], "answer": across[clue]["word"], "row": -1, "col": -1}
    for clue in down:
        clues["down"][clue] = {"clue": down[clue]["clue"], "answer": down[clue]["word"], "row": -1, "col": -1}
    for row in range(rows):
        for col in range(cols):
            if board_unsolved[row][col].isnumeric():
                if board_unsolved[row][col] in clues["across"]:
                    clues["across"][board_unsolved[row][col]]["row"] = row
                    clues["across"][board_unsolved[row][col]]["col"] = col
                if board_unsolved[row][col] in clues["down"]:
                    clues["down"][board_unsolved[row][col]]["row"] = row
                    clues["down"][board_unsolved[row][col]]["col"] = col

    # check for invalid clues
    for clue in clues["across"]:
        if clues["across"][clue]["row"] == -1 or clues["across"][clue]["col"] == -1:
            return
    for clue in clues["down"]:
        if clues["down"][clue]["row"] == -1 or clues["down"][clue]["col"] == -1:
            return
                
    # write to new file
    json_object = json.dumps(clues, indent=4)
    with open("puzzles/" + str(year) + "/" + str(month) + "/" + str(day) + ".json", "w") as outfile:
        outfile.write(json_object)
    
    # Close json file
    f.close()

os.mkdir("puzzles")
for year in range(1942, 2023):
    os.mkdir("puzzles/" + str(year))
    for month in range(1, 13):
        os.mkdir("puzzles/" + str(year) + "/" + str(month))
        for day in range(1, 32):
            generate_crossword(year, month, day)

