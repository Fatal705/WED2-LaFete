define(['app/services/UuidService'], function(UuidService) {
	'use strict';

	var Event = function(name, description, targetGroup, contributionsDescription, location, times, maximalAmoutOfGuests, guests, id) {
		this.id = id || UuidService.getRandomUuid();
		this.name = name;
		this.description = description;
		this.targetGroup = targetGroup;
		this.contributionsDescription = contributionsDescription;
		this.location = location;
		this.times = times;
		this.guests = guests;
		this.maximalAmoutOfGuests = maximalAmoutOfGuests;

		Object.defineProperty(this, 'begin', {
			get: function() {
				return this.times.begin;
			},
			set: function(begin) {
				this.times.begin = begin;
			}
		});

		Object.defineProperty(this, 'end', {
			get: function() {
				return this.times.end;
			},
			set: function(end) {
				this.times.end = end;
			}
		});
	};

	Event.createFromDTO = function(jsonData) {
		return new Event(
			jsonData.name,
			jsonData.description,
			jsonData.targetGroup,
			jsonData.contributionsDescription,
			jsonData.location,
			jsonData.times,
			jsonData.maximalAmoutOfGuests,
			jsonData.guests,
			jsonData.id
		);
	};

	return Event;
});