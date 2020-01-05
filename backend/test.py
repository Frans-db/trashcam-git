from NeuralNetwork import NeuralNetwork
import numpy as np
import cv2
import os

base_directory = 'backend/dataset-resized'
labels = [label for label in os.listdir(base_directory) if not label.startswith('.')]
data = []
for label in labels:
    images = os.listdir(base_directory + '/' + label)
    for image in images:
        img = cv2.imread(base_directory + '/' + label + '/' + image, 0)
        img = cv2.resize(img, (64, 64))
        cv2.imshow('img', img)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

#img = cv2.imread('backend/dataset-resized/cardboard/cardboard1.jpg')
#cv2.imshow('img', img)
#cv2.waitKey(0)
#cv2.destroyAllWindows()