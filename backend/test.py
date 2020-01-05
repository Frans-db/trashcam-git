from NeuralNetwork import NeuralNetwork
import numpy as np
import random
import cv2
import os

print('Getting data')
base_directory = 'backend/dataset-resized'
labels = [label for label in os.listdir(base_directory) if not label.startswith('.')]
print(f'Amount of labels: {len(labels)}')
data = []
for label in labels:
    images = os.listdir(base_directory + '/' + label)
    for image in images:
        img = cv2.imread(base_directory + '/' + label + '/' + image, 0)
        img = cv2.resize(img, (64, 64))
        x = img.reshape((img.shape[0] * img.shape[1], 1)) /255
        y = np.zeros(len(labels))
        y[labels.index(label)] = 1
        y = y.reshape((6, 1))
        data.append((x,y))

random.shuffle(data)
text_index = 100
test_data = data[:text_index]
train_data = data[text_index:]

print(len(data))
print('Training network')
nn = NeuralNetwork([data[0][0].shape[0], 64, 64, 6])
nn.train(train_data, 15, 40, 3, test_data=test_data)

#img = cv2.imread('backend/dataset-resized/cardboard/cardboard1.jpg')
#cv2.imshow('img', img)
#cv2.waitKey(0)
#cv2.destroyAllWindows()