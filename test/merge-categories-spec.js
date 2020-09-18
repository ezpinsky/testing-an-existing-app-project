const { expect } = require("chai");
const { mergeCategories } = require("../merge-categories");

describe("mergeCategories()", () => {
	context("Using <li> tags", () => {
		const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

		it("should return no <li>s for no categories", () => {
			//Arrange
			const categories = [];

			//Act
			const res = mergeCategories(template, categories, "li");

			//Assert
			expect(res).to.contain("<div>");
			expect(res).to.contain("</div>");
			expect(res).to.contain("<ul>");
			expect(res).to.contain("</ul>");
			expect(res).to.not.contain("<li>");
			expect(res).to.not.contain("</li>");
			expect(res).to.not.contain("<!--Content here -->");
		});

		it("should return a single <li> for one category", () => {
			//Arrange
			const categories = ["value"];

			//Act
			const res = mergeCategories(template, categories, "li");

			//Assert
			expect(res).to.contain("<div>");
			expect(res).to.contain("</div>");
			expect(res).to.contain("<ul>");
			expect(res).to.contain("</ul>");
			expect(res).to.contain("<li>value</li>");
			expect(res).to.not.contain("<!--Content here -->");
		});

		it("should return an <li> for each category", () => {
			//Arrange
			const categories = ["value1", "value2"];

			//Act
			const res = mergeCategories(template, categories, "li");

			//Assert
			expect(res).to.contain("<div>");
			expect(res).to.contain("</div>");
			expect(res).to.contain("<ul>");
			expect(res).to.contain("</ul>");
			expect(res).to.contain("<li>value1</li>");
			expect(res).to.contain("<li>value2</li>");
			expect(res).to.not.contain("<!--Content here -->");
		});
	});

	context("using <option> tags", () => {
		const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

		it("should return no <option>s for no categories", () => {
			expect.fail("please write this test");
		});

		it("should return a single <option> for one category", () => {
			expect.fail("please write this test");
		});

		it("should return an <option> for each category", () => {
			expect.fail("please write this test");
		});
	});
});
