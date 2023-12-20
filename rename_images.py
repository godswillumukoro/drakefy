import os

def rename_images(folder_path):
    i = 1
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(('webp', '.jpg', '.png', '.gif')):
            new_name = f"{i}.{filename.split('.')[-1].lower()}"
            os.rename(os.path.join(folder_path, filename), os.path.join(folder_path, new_name))
            i += 1

if __name__ == "__main__":
    folder_path = input("Enter the path to the folder containing images: ")
    rename_images(folder_path)
